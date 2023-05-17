import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import Button from '../conponent/Button';
import Icon from '../conponent/Icon';
import TextButton from '../conponent/TextButton';
import TextField from '../conponent/TextField';
import Typography from '../conponent/Typography';
import { createGroup, updateGroup } from '../util/api';
import Portal from '../util/portal';

const Dim = styled.div`
    position: fixed;
    inset: 0;
    background-color: ${({theme}) => theme.gray9};
    cursor: pointer;
    opacity: 0.5;
    z-index: 9;
    animation: slide1 0.5s;
    @keyframes slide1{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 0.5;
        }
    }
`
const Wrapper = styled.div`
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 20px;
    width: 100%;
    max-width: 540px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: calc(100vh - 200px);
    background-color: white;
    border-radius: 8px;
    overflow: scroll;
    z-index: 9;
    animation: slide 0.5s;
    @media screen and (max-width: 425px) {
        padding: 20px;
    }
    @keyframes slide{
        0%{
            opacity: 0.6;
            transform: translateY(20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
`
const ListWrapper = styled.div`
    border: 1px solid ${({theme}) => theme.gray2};
    flex: 1;
    overflow: scroll;
    border-radius: 4px;
    margin: 16px 0 24px;
    padding: 8px 0;
`
const Bottom = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
`
const Title = styled(Typography)`
    flex: 1;
`
const LoadingText = styled(Typography)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
function CreateModal ({ onClickClose, groupMeta, history }) {
    const [seleted, setSeleted] = useState(groupMeta ? groupMeta.boards : [])
    const [filter, setFilter] = useState('')
    const [title, setTitle] = useState(groupMeta ? groupMeta.title : '')
    const [loading, setLoading] = useState(false)
    const [allBoards] = useLocalStorage('allBoards', [])
    const navigate = useNavigate()
    const getGroupTitle = (name, value) => {
        setTitle(value)
    }
    const handleSearch = (name, value) => {
        setFilter(value)
    }
    const handleClickBoard = (id) => {
        if(seleted.find(s => s === id)){
            setSeleted(prev => prev.filter(s => s !== id))
        }else{
            setSeleted(prev => [...prev, id])
        }
    }
    const handleClickCreate = () => {
        setLoading(true)
        if(groupMeta){
            updateGroup(groupMeta.id, {
                title: title,
                updated_at: new Date(),
                is_deleted: false,
                boards: seleted
            }).then(() => {
                onClickClose()
            })
        }else{
            createGroup({
                title: title,
                created_at: new Date(),
                updated_at: new Date(),
                is_deleted: false,
                boards: seleted
            }).then(() => {
                onClickClose()
            })
        }
    }
    const handleClickDelete = () => {
        updateGroup(groupMeta.id, {
            updated_at: new Date(),
            is_deleted: true,
        }).then(() => {
            navigate("/")
        })
    }
    return(
        <Portal>
            <Dim onClick={onClickClose}/>
            <Wrapper>
                <Typography size={16} weight={700} color={'gray9'}>{groupMeta ? '그룹 수정하기' : '그룹 만들기'}</Typography>
                <Typography size={12} color={'gray6'} margin={'24px 0 4px'}>이름</Typography>
                <TextField
                    defaultValue={title} 
                    name='title' 
                    callback={getGroupTitle}
                    maxLength={32}
                />
                <Typography size={12} color={'gray6'} margin={'24px 0 4px'}>보드</Typography>
                <TextField
                    defaultValue={''} 
                    placeholder="보드 검색"
                    name='search' 
                    callback={handleSearch}
                    maxLength={32}
                />
                <ListWrapper>
                    {allBoards.length > 0 ? 
                        allBoards.filter(b => b.title.includes(filter)).map(board => (
                            <Board 
                                key={board.id}
                                board={board} 
                                isChecked={seleted.find(s => s === board.id)} 
                                onClick={() => handleClickBoard(board.id)}
                            />
                        )) :
                        <LoadingText size={16} color={'gray5'}>가져오는 중</LoadingText>
                    }
                </ListWrapper>
                <Bottom>
                    <Title size={14} color={'gray9'}>{seleted.length}개 선택</Title>
                    {groupMeta && <TextButton onClick={handleClickDelete}>삭제하기</TextButton>}
                    <TextButton onClick={onClickClose}>닫기</TextButton>
                    <Button disabled={!title || seleted.length === 0 || loading} onClick={handleClickCreate}>{groupMeta ? '저장하기' : '만들기'}</Button>
                </Bottom>
            </Wrapper>
        </Portal>
    )
}

const Item = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    gap: 8px;
    cursor: pointer;
    &:hover{
        background-color: ${({theme}) => theme.gray0};
    }
`
const Circle = styled.div`
    display: flex;
    border-radius: 50%;
    background-color: ${props => props.isChecked ? props.theme.teal : props.theme.white};
    border: 1px solid ${props => props.isChecked ? props.theme.teal : props.theme.gray3};
    
`

function Board ({board, isChecked, onClick}) {
    return (
        <Item onClick={onClick}>
            <Circle isChecked={isChecked}><Icon name={'check'} color={'white'}/></Circle>
            <Title size={14} weight={500} color={'gray9'}>{board.title}</Title>
            <Typography size={14} weight={500} color={'gray6'}>{board.creator}</Typography>
        </Item>
    )
}

export default CreateModal
