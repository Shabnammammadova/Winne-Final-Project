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
                let user = await User.findOne({ githubID: profile.id });

                if (!user) {
                    const randomPassword = crypto.randomBytes(16).toString("hex");
                    const hashedPassword = await bcrypt.hash(randomPassword, 10);



                    const defaultName = profile.displayName || "Unknown Name";
                    const defaultEmail = profile.emails?.[0]?.value || `${profile.emails}`;


                    user = new User({
                        githubID: profile.id,
                        name: defaultName.split(" ")[0] || "User",
                        surname: defaultName.split(" ")[1] || "GitHub",
                        email: defaultEmail,
                        password: hashedPassword,
                        avatar: profile.photos?.[0]?.value,
                    });

                    await user.save();
                }
                const userObj: IUser = user.toObject();
                delete userObj.password;

                done(null, userObj);
            } catch (error) {
                done(error);
            }
        }
    )
);
