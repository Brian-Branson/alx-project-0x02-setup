// pages/users.tsx
import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 24 }}>Users</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          Name={user.Name}
          Email={user.Email}
          address={user.address}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    Name: user.name,
    Email: user.email,
    address: `${user.address.street}, ${user.address.city}`,
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
//["getStaticProps()"]