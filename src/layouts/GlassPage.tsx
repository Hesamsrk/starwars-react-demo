import {useTitle} from "../hooks/useTitle";
import {FC, PropsWithChildren} from "react";
import styled from "styled-components";
import {Config} from "../config";

type TitleSide = "start" | "end" | "center"

export interface PageProps {
    tabTitle: string,
    title: {
        content: string,
        side: TitleSide
    } | string
}

export const GlassPage: FC<PropsWithChildren<PageProps>> = (
    {
        title,
        tabTitle,
        children
    }) => {
    useTitle(`${Config.appName} - ${tabTitle}`)

    return <Container>
        <InnerContainer>
            <Title
                side={typeof title !== "string" ? title.side : "start"}>
                {typeof title === "string" ? title : title.content}</Title>
            {children && <Glass>
                {children}
            </Glass>}
        </InnerContainer>
    </Container>
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  width: clamp(300px, calc(100% - 50px), 1000px);
`

const Title = styled.div<{ side: TitleSide }>`
  font-weight: bold;
  font-size: 32px;
  text-transform: uppercase;
  width: 100%;
  text-align: ${props => props.side};
  padding: 10px;
`


export const Glass = styled.div`
  /*Styling*/
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /*Positioning and  overflow*/
  position: relative;
  overflow: visible;
  /*To display glass effect correctly*/
  z-index: 1;
  background: inherit;
  /*
  default font color for all inner layers
  */
  color: white;

  &:before {
    /* To apply glass effect on #container displayable in pretty much all older and new browsers - better than using backdrop-filter*/
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(34, 34, 34, 0.5);
    filter: blur(3px);
    margin: -20px;
  }
`
