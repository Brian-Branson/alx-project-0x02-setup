import Card from "@/components/common/Card";
import Header from "@/components/layout/Header"
// import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <Card title="Welcome to My Site" content={<p>This is the home page content.</p>} />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
} 
