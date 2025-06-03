import Button from "@/components/common/Button";
import Header from "@/components/layout/Header"


export default function Pages() {
  return (
    <div>
      <Header />
      <h1>Pages</h1>
      <p>This is the pages page.</p>
    <Button title="a" size="small" shape="rounded-sm" />
    <Button title="b" size="medium" shape="rounded-md" />
    <Button title="c" size="large" shape="rounded-full"/>

    </div>
    
  );
}