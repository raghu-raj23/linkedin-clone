import styled from "styled-components";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const PostModal = props => {
    const [editorText, setEditorText] = useState("");
    const [sharedImg, setSharedImg] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");
    
    const handleChange = (e) => {
        const image = e.target.files[0];
        if(image === "" || image === undefined) {
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }
        setSharedImg(image);
    };

    const switchAssetArea = area =>{
        setSharedImg("");
        setVideoLink("");
        setAssetArea(area);
    }
    
    const reset = (e) => {
        setEditorText("");
        setSharedImg("");
        setVideoLink("");
        setAssetArea("");
        props.handleModal(e);
    };

    return (
        <>
        {
            props.showModal === true &&
            <Container>
                <Content>
                    <Header>
                        <h2>Create a post</h2>
                        <button onClick={e => reset(e)}>
                            <img src="/images/close-icon.svg" alt="" />
                        </button>
                    </Header>
                    <SharedContent>
                        <UserInfo>
                            <img src="/images/user.svg" alt="" />
                            <span>Name</span>
                        </UserInfo>
                        <Editor>
                            <textarea
                            value={editorText} 
                            onChange = {(e) => setEditorText(e.target.value)}
                            placeholder="What do you want to talk about?"
                            autoFocus = {true}
                            />
                            {
                                assetArea === "image" &&
                                <UploadImage>
                                    <input type="file" 
                                    accept="image/gif, image/jpeg, image/png" name="image" 
                                    id="file" 
                                    style={{display: "none"}} 
                                    onChange={handleChange}
                                    />
                                    {sharedImg && <img src = {URL.createObjectURL(sharedImg)} alt = "" />}
                                    <>
                                        <input type="text" placeholder="Please input a video link" value={videoLink} onChange ={e => setVideoLink(e.target.value)}/>
                                        { videoLink && (
                                            <ReactPlayer url={videoLink} width={"100%"} />
                                            )
                                        }
                                    </>
                                </UploadImage>
                            }
                        </Editor>
                    </SharedContent>
                    <ShareCreation>
                        <AttachAssets>
                            <AssetButton>
                                    <label htmlFor="file">
                                <img src="/images/share-image.svg" alt="" />
                                    </label>
                            </AssetButton>
                            <AssetButton>
                                
                                <img src="/images/share-video.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/share-doc.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/share-hiring.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/share-occ.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/share-poll.svg" alt="" />
                            </AssetButton>
                            <AssetButton>
                                <img src="/images/ellipsis.svg" alt="" />
                            </AssetButton>
                        </AttachAssets>
                        <ShareComment>
                        <AssetButton>
                            <img src="/images/who-comment.svg" alt="" />
                            Anyone
                        </AssetButton>
                        </ShareComment>

                        <PostButton disabled = {!editorText ? true: false}>Post</PostButton>

                    </ShareCreation>
                </Content>
            </Container>
        }
        </>
    );
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background: rgba(0,0,0,0.58);
    animation: fadeIn 0.3s ease-in-out;
`;

const Content = styled.div`
    /* width: 100%; */
    max-width: 552px;
    background: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    box-shadow:0 12px 48px rgba(109,117,141,.2);
    margin: 0 auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 24px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 18px;
    line-height: 1.5;
    color: #191919;
    align-items: center;
    button{
        outline: none;
        height: 40px;
        width: 40px;
        min-width: auto;
        color: #191919;
        border: none;
        border-radius: 50%;
        background: transparent;
        &:hover{
            background: #EBEBEB;
        }
    }
    svg, img{
        pointer-events: none;
    }
    h2{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;

`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    svg, img{
        width: 48px;
        border-radius: 50%;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 8px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 12px 8px 16px;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0,0,0,0.5);
    &>img:hover{
        background-color: #EBEBEB;
    }
`;

const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetButton}{
        width: 40px;
        /* border: none;
        background: transparent;
        outline: none; */
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    ${AssetButton}{
        svg{
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding: 0 16px;
    background: ${props => props.disabled ? "rgba(0,0,0,0.7)" : "#0A66C2"};
    color: ${props => props.disabled ? "rgba(0,0,0,0.2)" : "#fff"};
    &:hover{
        background: ${props => props.disabled ? "rgba(0,0,0,0.07)" : "#004182"};
    }
`;

const Editor = styled.div`
    padding: 12px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        font-family: Arial, Helvetica, sans-serif;
        border: none;
        color: #191919;
        input{
            width: 100%;
            height: 35px;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
`;

const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
`;

export default PostModal;