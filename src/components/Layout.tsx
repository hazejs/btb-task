import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import CharactersTableComponent from './CharacterTable'
import LoginForm from './LoginForm';
import { Context as MainContext } from '../context/MainContext';
import { MainWrapper } from '../styles/LayoutStyle';
import LogoutButton from './LogoutButton';

type Props = {}

const SearchAndTable = () => {
    return (
      <div>
        <SearchBar />
        <CharactersTableComponent />
      </div>
    )
}

const Layout = (props: Props) => {
    const { isUserLogedIn, state: {isAuthanticated} } = useContext(MainContext)

    useEffect(() => {
      isUserLogedIn()
    }, [isAuthanticated]);

    return (
        <MainWrapper>
            {!isAuthanticated ? <LoginForm/> :  <SearchAndTable/>}  
            {isAuthanticated && <LogoutButton></LogoutButton>}  
        </MainWrapper>
    )
}

export default Layout