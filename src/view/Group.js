import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import Container from '../conponent/Container';
import TextButton from '../conponent/TextButton';
import Typography from '../conponent/Typography';
import { EditorGlobalStyles } from '../constants/global';
import ArrowRightImg from '../img/ArrowRight';
import BoardImg from '../img/Board';
import { getGroup } from '../util/api';
import CreateModal from './CreateModal';

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`
const CardList = styled.div`

`
const TitleBox = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`
const Nav = styled(Typography)`
    &:hover{
        color: ${({theme}) => theme.gray7};
    }
    transition: 0.3s;
    cursor: pointer;
`
const StyledCard = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: 0.3s;
    border-radius: 4px;
    &:hover{
        background-color: ${({theme}) => theme.gray0};
        padding: 16px 20px;
    }
`
const Flex1 = styled(Typography)`
    flex: 1;
`
function Group({history}) {
    const [groupMeta, setGroupMeta] = useState()
    const [showModal, setShowModal] = useState(false)
    const {id} = useParams()
    const [allBoards] = useLocalStorage('allBoards', [])
    const [boards, setBoards] = useState([])
    useEffect(() => {
        getGroup(id).then(res => setGroupMeta(res))
    }, [showModal])
    useEffect(() => {
        if(groupMeta){
            setBoards(allBoards.filter(b => groupMeta.boards.includes(b.id)))
        }
    }, [groupMeta])
    const handleClickCreateGroup = () => {
        setShowModal(prev => !prev)
    }
    const handleClickCard = () => {
    }
    const dateGenerator = (dateRange) => {
        const unit = {
            day : '일',
            week : '주',
            month : '개월',
        }
        if(dateRange){
            if(dateRange.type === 'since'){
                return dateRange.from + ' ~'
            }else if(dateRange.type === 'between'){
                return dateRange.from + ' ~ ' + dateRange.to
            }else if(dateRange.type === 'in the last'){
                return '최근 ' + dateRange.window.value + unit[dateRange.window.unit]
            }
        }else{
            return null
        }
    }
    return (
        <Container>
            <EditorGlobalStyles/>
            <HeaderBox>
                <TitleBox>
                    <Link to={'..'} style={{ textDecoration: "none" }}>
                        <Nav size={28} weight={700} color={'gray4'}>모든 그룹</Nav>
                    </Link>
                    <ArrowRightImg/>
                    <Typography size={28} weight={700} color={'gray9'}>{groupMeta && groupMeta.title}</Typography>
                </TitleBox>
                <TextButton onClick={handleClickCreateGroup}>수정하기</TextButton>
            </HeaderBox>
            <CardList>
                {boards.map(board => (
                    <a href={`https://mixpanel.com/project/2847613/view/3380921/app/boards#id=${board.id}`} target='_blank' key={board.id} style={{ textDecoration: "none" }} rel="noopener noreferrer">
                        <StyledCard onClick={handleClickCard}>
                            <BoardImg/>
                            <Flex1 size={16} weight={500} color={'gray9'}>{board.title}</Flex1>
                            <Typography size={14} color={'gray6'}>{board.time_filter && dateGenerator(board.time_filter.dateRange)}</Typography>
                        </StyledCard>
                    </a>
                ))}
            </CardList>
            {showModal && 
                <CreateModal onClickClose={handleClickCreateGroup} groupMeta={groupMeta} history={history}/>
            }
        </Container>
    )
}

export default Group;
