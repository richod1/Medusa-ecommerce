import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Group Six",
  description: "Explore all of our products.",
}

export default function StorePage() {
  return <StoreTemplate />
}
