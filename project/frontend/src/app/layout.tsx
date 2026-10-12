import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import GlobalStyles from "@/components/GlobalStyles";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A Next.js application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
