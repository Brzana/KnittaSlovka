import { ContactMessage } from "@/app/_lib/supabaseTypes";

export default function MessageDetailContent({
    message,
}: {
    message: ContactMessage;
}) {
    return (
        <div className="p-8">
            <p className="text-text leading-relaxed whitespace-pre-wrap">
                {message.message}
            </p>
        </div>
    );
}
