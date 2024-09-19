import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #bcbcbc;
    /* Grey background */
    color: #030303;
    /* Black text color */
    padding: 20px 0;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px 0;
    display: flex;
    justify-content: center;
`;

const FooterLinkItem = styled.li`
    margin: 0 15px;
`;

const FooterLink = styled.a`
    color: #030303;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
                <FooterLinks>
                    <FooterLinkItem>
                        <FooterLink href="/about">About Us</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLink href="/contact">Contact</FooterLink>
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    </FooterLinkItem>
                </FooterLinks>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;
