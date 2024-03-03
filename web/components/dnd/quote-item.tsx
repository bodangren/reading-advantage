import React, { CSSProperties, useState } from "react";
import styled from "@emotion/styled";
import type { DraggableProvided } from "@hello-pangea/dnd";
import Image from "next/image";
import type { Quote } from "./types";
import AudioButton from "../audio-button";

interface Props {
  quote: Quote;
  isDragging: boolean;
  provided: DraggableProvided;
  isClone?: boolean;
  isGroupedOver?: boolean;
  style?: CSSProperties;
  index?: number;
}

const getBackgroundColor = (isDragging: boolean, isGroupedOver: boolean) => {
  if (isGroupedOver) {
    return "#EBECF0";
  }

  if (isDragging) {
    return "#EAE6FF";
  }

  return "#FFFFFF";
};

interface ContainerProps {
  isDragging: boolean;
  isGroupedOver: boolean;
}

const Container = styled.a<ContainerProps>`
  border-radius: 20px;
  border: 2px solid transparent;
  border-color: getBorderColor;
  background-color: ${(props) =>
    getBackgroundColor(props.isDragging, props.isGroupedOver)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px #A5ADBA` : "none"};
  box-sizing: border-box;
  padding: 8px;
  min-height: 40px;
  margin-bottom: 8px;
  user-select: none;

  /* anchor overrides */
  color: #091e42;

  &:hover,
  &:active {
    color: rgb(22 101 52);
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: #b00fb0;
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`;

const Content = styled.div`
  /* flex child */
  flex-grow: 1;

  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;

  /* flex parent */
  display: flex;
  flex-direction: column;
`;

const BlockQuote = styled.div`
  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

const Footer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: flex-end;
`;

const Badges = styled.small`
  margin-right: 10px;
`;

const getStyle = (
  provided: DraggableProvided,
  style?: CSSProperties | null
) => {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
};

const QuoteItem = (props: Props) => {
  const {
    quote,
    isDragging,
    isGroupedOver,
    provided,
    style,
    index,
  } = props;

  return (
    <Container
      isDragging={isDragging}
      isGroupedOver={Boolean(isGroupedOver)}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
    >
      <Content>
        <BlockQuote>{quote.text}</BlockQuote>
        <Footer>
          {quote?.correctOrder ? (
            <Badges>
              <Image
                src={"/correct.png"}
                alt="Malcolm X"
                width={25}
                height={25}
              />
            </Badges>
          ) : (
            <Badges>
              <Image
                src={"/wrong.png"}
                alt="Malcolm X"
                width={25}
                height={25}
              />
            </Badges>
          )}

          {/* <p>id:{quote.id}</p> */}
          <AudioButton
            key={new Date().getTime()}
            audioUrl={`https://storage.googleapis.com/artifacts.reading-advantage.appspot.com/audios/${quote.articleId}.mp3`}
            startTimestamp={quote?.timepoint || 0}
            endTimestamp={quote?.endTimepoint || 0}
          />
        </Footer>
      </Content>
    </Container>
  );
};

export default React.memo<Props>(QuoteItem);
