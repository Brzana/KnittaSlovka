export default function SendButton({ disabled }: { disabled?: boolean }) {
    return (
        <button
            type="submit"
            className="bg-accent hover:bg-accent2 rounded-full px-3 py-2 font-bold text-white transition duration-300"
            disabled={disabled}
        >
            Send
        </button>
    );
}
