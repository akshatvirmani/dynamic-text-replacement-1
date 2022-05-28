import React, { useState } from "react";
import "./highlightCSS.css";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { BiCheck, BiPencil } from "react-icons/bi";
import HighlightTwo from "./Highlight_2";
import Navbar from "./Navbar";
import { BsCheck2Circle } from "react-icons/bs";

function InputHighlight() {
  const [para, setPara] = useState("");
  const [showInput, setShowInpt] = useState(true);
  const handleInput = (e) => {
    console.log(e.target.value);
    setPara(e.target.value);
  };

  const handleSubmit = () => {
    setShowInpt(false);
  };

  return (
    <>
      {showInput ? (
        <Box
          overflow="hidden"
          bgImage={"/bg.png"}
          minH={"100vh"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
        >
          <Navbar color="white" />

          <div className="field">
            <Box
              color="white"
              rounded={"2xl"}
              px={"20"}
              m={20}
              bg={"rgb(255,160,122,.9)"}
            >
              <p className="title">Instructions:</p>
              <div className="tag">
                <p className="list">
                  Edit the text like a normal word document. You can add and
                  remove text too.
                </p>
              </div>
              <div className="tag">
                <p className="list">
                  Click on "Highlight"{" "}
                  <BiPencil fontSize={"20px"} color={"cyan"} />
                  and simply highlight the words you want to blank out.
                </p>
              </div>
              <div className="tag">
                <p className="list">
                  After editing, click on "done"{" "}
                  <BiCheck fontSize={"30px"} color={"cyan"} /> to create your
                  fill-in quiz.
                </p>
              </div>
            </Box>
          </div>
          <Box bg={"white"} m={20} rounded={"2xl"}>
            <HStack
              my={5}
              bg="black"
              color="white"
              px={"96"}
              justifyContent={"space-around"}
              alignItems={"center"}
              roundedTop={"2xl"}
              py={1}
              textAlign="center"
            >
              <Box mx={5} onClick={handleSubmit}>
                <Button
                  color={"cyan"}
                  backgroundColor={"black"}
                  _hover={"black"}
                  _focus={{ border: "none" }}
                  variant={"unstyled"}
                >
                  <BsCheck2Circle fontSize={"30px"} color={"cyan"} />
                </Button>
                <Text className="textshift">Ok</Text>
              </Box>
            </HStack>

            <textarea
              placeholder="Here is a sample placeholder"
              style={{
                width: "95%",
                height: "50vh",
                marginLeft: "10px",
                marginBottom: "10px",
                // resize: "none",
                outline: "none",
                border: "none",
                padding: "10px",
                paddingLeft: "20px",
              }}
              size="sm"
              resize={"none"}
              onChange={(e) => handleInput(e)}
              border="none"
              outline={"none"}
            />
          </Box>
        </Box>
      ) : (
        <HighlightTwo inputText={para} />
      )}
    </>
  );
}

export default InputHighlight;
