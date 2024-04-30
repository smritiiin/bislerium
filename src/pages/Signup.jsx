import { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div
      style={{
        borderRadius: "3xl",
        padding: "2rem",
        backgroundColor: "#e1e8ff",
        margin: "auto",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridColumn: 2,
          gridTemplateColumns: "repeat(2, 1fr)", // Specify grid columns
          height: "97%",
          overflow: "hidden",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "10px",
        }}
      >
        {/* Image div on the right */}
        <div style={{ height: "fit", marginBottom: "1rem" }}>
          <img
            src="/src/assets/coverimage.jpg"
            alt="background cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            padding: "3rem",
            backgroundColor: "#f0f4ff",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 550,
                color: "#390DA0",
              }}
            >
              Bislerium
            </h1>
            <h1 style={{ fontSize: "2rem", fontWeight: 400 }}>Welcome</h1>
          </div>

          {/* Signup form */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <form>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="1.2em"
                  >
                    <MdEmail size={20} />
                  </InputLeftElement>
                  <Input type="email" placeholder="Email" />
                </InputGroup>
                <InputGroup size="md">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="1.2em"
                  >
                    <RiLockPasswordFill />
                  </InputLeftElement>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      color="gray.500"
                    >
                      {show ? (
                        <FaEyeSlash size="1.3rem" />
                      ) : (
                        <FaEye size="1.3em" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Stack>
              {/* Sign in button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button type="submit" colorScheme="blue">
                  Signup
                </Button>
              </div>
            </form>

            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                marginTop: "4rem",
                paddingBottom: "1rem",
              }}
            >
              <p>Dont have an account? </p>&nbsp;
              <Link to="/login" style={{ color: "blue", fontWeight: 500 }}>
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
