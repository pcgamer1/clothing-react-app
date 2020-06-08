import React from 'react'
import './menu-item.styles'
import { withRouter } from 'react-router-dom'
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles'

class MenuItem extends React.Component {
    render() {

        const {size, title, imageUrl, history, linkUrl, match} = this.props

        return (
            <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <BackgroundImageContainer imageUrl={imageUrl}/>
                <ContentContainer>
                    <ContentTitle>{title.toUpperCase()}</ContentTitle>
                    <ContentSubtitle>SHOP NOW</ContentSubtitle>
                </ContentContainer>
            </MenuItemContainer>
        )
    }
}

export default withRouter(MenuItem)