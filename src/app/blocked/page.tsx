
export default function Blocked() {
    return (
        <div>
            <h2 className="mb-6">
                Bot Protection with Botd (by FingerprintJS)
            </h2>
            <p>
                You should never see this page! Why? Because we intentionally change the
                user agent to match a bot, and then the edge will rewrite your request
                to /bot-detected
            </p>
        </div>
    )
}