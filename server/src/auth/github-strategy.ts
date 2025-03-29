import passport from "passport";
import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import dotenv from "dotenv";
import crypto from "crypto";
// import bcrypt from "bcrypt";
import bcrypt from 'bcryptjs';
import { IUser } from "../types/user";
import User from "../mongoose/schemas/user";

dotenv.config();

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            callbackURL: "http://localhost:3000/auth/github/callback",
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: any) => {
            try {
                if (!profile.id) {
                    return done(new Error("GitHub ID not found"));
                }

                let user = await User.findOne({ githubID: profile.id });

                if (!user) {
                    const existingEmailUser = await User.findOne({ email: profile.emails?.[0]?.value });

                    if (existingEmailUser) {
                        return done(null, existingEmailUser);
                    }

                    const randomPassword = crypto.randomBytes(16).toString("hex");
                    const hashedPassword = await bcrypt.hash(randomPassword, 10);

                    user = new User({
                        githubID: profile.id,
                        name: profile.displayName?.split(" ")[0] || "User",
                        surname: profile.displayName?.split(" ")[1] || "GitHub",
                        email: profile.emails?.[0]?.value || `github_user_${profile.id}@example.com`,
                        password: hashedPassword,
                        avatar: profile.photos?.[0]?.value,
                    });

                    await user.save();
                }

                done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);