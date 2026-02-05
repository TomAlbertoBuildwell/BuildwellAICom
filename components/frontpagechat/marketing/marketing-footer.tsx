import Link from "next/link"
import Image from "next/image"

export function MarketingFooter() {
    return (
        <footer className="border-t border-border bg-muted/30 dark:bg-[#0a1929]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/chatimg/logo.png"
                                alt="BuildwellAI"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            AI-powered solutions for the UK construction industry. Building safety, compliance, and innovation.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-muted-foreground transition-colors hover:text-foreground">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* BuildwellAI Products */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Products</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://thread.buildwellai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                                    BuildwellTHREAD
                                </a>
                            </li>
                            <li>
                                <a href="https://eye.buildwellai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Buildwell Eye
                                </a>
                            </li>
                            <li>
                                <a href="https://inspect.buildwellai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Buildwell Inspect
                                </a>
                            </li>
                            <li>
                                <a href="https://chat.buildwellai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                                    BuildwellAI Chat
                                </a>
                            </li>
                            <li>
                                <a href="https://news.buildwellai.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                                    BuildwellAI News
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/api_documentation" className="text-muted-foreground transition-colors hover:text-foreground">
                                    API Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} BuildwellAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
