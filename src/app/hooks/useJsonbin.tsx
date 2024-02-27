import { useState } from "react";

const secretKey =
  "$2a$10$h2e60pHkql9zXnRfpCL6.OVNAFlYUagijLi2AJ290VhuDLbDY5BvW";
const accessKey =
  "$2a$10$QL59W9fkLJNxOVdTRI3PluRaGszMtUwcm.cbtvyl6BUb0kUs7KGci";

const binId = "65dd27051f5677401f34d85f ";

const useJsonbin = (): [(email: string) => Promise<string | null>, boolean] => {
  const [error, setError] = useState<boolean>(false);

  const saveEmail = async (email: string): Promise<string | null> => {
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": secretKey,
          "X-Access-Key": accessKey,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();

        return data.record.email as string;
      }

      setError(true);

      return null;
    } catch (error) {
      setError(true);

      return null;
    }
  };

  return [saveEmail, error];
};

export default useJsonbin;
