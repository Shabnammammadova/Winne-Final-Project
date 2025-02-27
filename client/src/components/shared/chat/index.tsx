import { useEffect, useRef, useState } from "react"
import { RenderIf } from "../RenderIf"
import { User } from "lucide-react";
import { useSocket } from "@/hooks/use-socket";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";
import { getUserId } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import conversationService from "@/services/conversation";
import CreateConversation from "./CreateConversation";
import { Spinner } from "../Spinner";



export const HelpPopover = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [userId, setUserId] = useState("")
    const { user, loading } = useSelector(selectUserData)
    const socket = useSocket()
    const inputRef = useRef<HTMLInputElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const { data: conversationData, isLoading: conversationLoading, status } = useQuery({
        queryKey: [QUERY_KEYS.USER_CONVERSATION],
        queryFn: () => conversationService.getByUserId({ userId }),
        enabled: !!userId
    })


    const [messages, setMessages] = useState<{ text: string; userId: string, createdAt: string }[]>([])
    const isLoading = loading || conversationLoading

    useEffect(() => {
        function handleOutsideClick() {
            setIsOpen(false)
        };



        window.addEventListener('click', handleOutsideClick)
        return () => window.removeEventListener('click', handleOutsideClick)
    }, []);


    useEffect(() => {
        if (!socket) return;
        socket.on("message", (message) => {
            setMessages((prev) => [...prev, message])
            console.log(message);

        })
    }, [socket])


    useEffect(() => {
        if (!loading) {
            setUserId(getUserId(user))
        }
    }, [loading])


    useEffect(() => {
        if (status === "success" && conversationData) {
            setMessages(conversationData.data?.item?.messages ?? [])
        }
    }, [status])
    console.log("conversationdata", conversationData);

    useEffect(() => {
        if (wrapperRef.current && isOpen) {
            wrapperRef.current.scrollTo({
                top: wrapperRef.current.scrollHeight,
                behavior: "smooth"
            })
        }
    }, [messages, isOpen])




    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (!socket) return;
        e.preventDefault();
        const message = inputRef.current?.value.trim();
        if (!message) return;
        inputRef.current!.value = "";
        socket.emit("message", { message, to: "67668e260aad514f7572fcf6", from: userId });
        setMessages((prev) => [
            ...prev,
            { text: message, userId, createdAt: new Date().toISOString() }
        ])
    }



    return (
        <div onClick={(e) => e.stopPropagation()}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-primary  m-0 cursor-pointer border-primary bg-none p-0 normal-case leading-5  z-20"
                type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
                <svg xmlns=" http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white block border-gray-200 align-middle">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" className="border-gray-200">
                    </path>
                </svg>
            </button>

            <RenderIf condition={isOpen}>
                <div style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
                    className="z-20 fixed bottom-[calc(4rem+1rem)] right-4 bg-white dark:bg-black p-4 rounded-lg border border-gray-200 w-[400px] h-[380px]">
                    <div className="flex flex-col space-y-1 pb-4">
                        <h2 className="font-semibold text-lg">Winne Help Chat</h2>
                    </div>
                    <RenderIf condition={isLoading}>
                        <div className="flex justify-center items-center h-full w-full">
                            <Spinner />
                        </div>
                    </RenderIf>

                    <RenderIf condition={!isLoading}>
                        <RenderIf condition={!conversationData}>
                            <CreateConversation />
                        </RenderIf>

                        <RenderIf condition={!!conversationData}>
                            <div ref={wrapperRef}
                                className="pr-3 h-[250px] overflow-y-auto space-y-3">
                                {messages.map((message, index) => (
                                    <MessageItem key={index} owner={message.userId === userId ? "You" : "Admin"} message={message.text} />
                                ))}
                            </div>

                            <div className="pt-2">
                                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                                    <input ref={inputRef}
                                        className="flex-1 h-9 rounded-md border px-3 py-1 text-sm placeholder-gray-400 focus:ring-2 focus:ring-gray-300 dark:text-black"
                                        placeholder="Type your message" />
                                    <button className="bg-black dark:bg-white dark:text-black text-white rounded-md px-4 py-1 h-9">Send</button>
                                </form>
                            </div>
                        </RenderIf>
                    </RenderIf>
                </div>
            </RenderIf>

        </div>
    )
}


const MessageItem = ({ message, owner }: { message: string, owner: "You" | "Admin" }) => {
    const isUser = owner === "You";
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
            <div className={`flex items-center gap-2 max-w-[75%] ${isUser ? "flex-row-reverse" : ""}`}>
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                    <div className="rounded-full bg-gray-100 border p-1 m-auto">
                        {isUser ? (
                            <User />
                        ) : (
                            <svg stroke="none" fill="black" strokeWidth="1.5"
                                viewBox="0 0 24 24" aria-hidden="true" height="20" width="20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
                                </path>
                            </svg>
                        )}
                    </div>
                </span>

                <div className={`px-5 py-1 rounded-lg text-sm ${isUser ? "bg-black dark:bg-gray-200 dark:text-black text-white" : "bg-gray-200 text-gray-700"}`}>
                    <span className="block font-bold">{owner}</span>
                    {message}
                </div>
            </div>
        </div>
    )
}