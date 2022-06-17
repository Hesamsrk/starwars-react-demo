import {useTitle} from "../hooks/useTitle";
import React, {FC, PropsWithChildren} from "react";
import styled from "styled-components";
import {Config} from "../config";

type TitleSide = "start" | "end" | "center"

export interface PageProps {
    title: string,
    header: {
        content: string,
        side: TitleSide
    } | string,
    minHeight?: string
}

export const GlassPage: FC<PropsWithChildren<PageProps>> = (
    {
        header,
        title,
        children,
        minHeight
    }) => {
    useTitle(`${Config.appName} - ${title}`)

    return <Container>
        <InnerContainer>
            <Title
                side={typeof header !== "string" ? header.side : "start"}>
                {typeof header === "string" ? header : header.content}</Title>
            <Glass minHeight={minHeight}>
                {children}
            </Glass>
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
  width: clamp(300px, calc(100%), 1000px);
`

const Title = styled.div<{ side: TitleSide }>`
  font-weight: bold;
  font-size: 32px;
  width: 100%;
  text-align: ${props => props.side};
  margin:20px;
`


export const Glass = styled.div<{ minHeight?: string }>`
  /*Styling*/
  border-radius: 5px;
  /*Positioning and  overflow*/
  position: relative;
  color: white;
  height: clamp(${props => props.minHeight}, unset, calc(100vh - 150px));
  backdrop-filter: blur(10px);
  overflow: hidden;
  padding: 10px;
  margin-bottom: 20px;
`
