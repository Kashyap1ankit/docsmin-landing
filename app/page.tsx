import NavigationBar from "@/components/navigation-bar";

export default function Home() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
      }}
      className="min-h-screen overflow-x-hidden"
    >
      <div className="bg-transparent px-4 py-2">
        <NavigationBar />
      </div>
    </div>
  );
}
