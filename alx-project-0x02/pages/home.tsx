import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header"
// import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Header />
      <Card title="Welcome to My Site" content={<p>This is the home page content.</p>} />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    <PostModal
      onSubmit={(post) => console.log("Post submitted:", post)}
      trigger={<button>Post</button>}
    />
    
    </div>
    
  );
} 
