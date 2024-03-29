import styled from 'styled-components';

export const Container = styled.div`
`;

export const ItemCart = styled.div`
    display: flex;
    width: 379px;
    height: 95px;

    align-items: center;
    justify-content: space-between;

    border-radius: 8px;

    padding-left: 10px;

    margin: 10px;
    
    background-color: #FFF;
`;

export const BagItemImage = styled.img`
    display: flex;
    width: 70px;
    height: 70px;
`;

export const BagItemName = styled.p`
    width: 113px;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400;

    color: #2C2C2C;
`;

export const BagItemAmount = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 50px;
    height: 28px;

    border: 1px solid #BFBFBF;
    border-radius: 4px;
`;

export const MinusButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 17px;
    height: 17px;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;

    background-color: #FFF;

    color: #000;


`;
export const PlusButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 17px;
    height: 17px;

    color: #000;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    background-color: #FFF;
    border: none;
`;

export const ItemAmount = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;

    padding: 5px;

    color: rgba(0, 0, 0, 1);

    

    border-left: 0.2px solid #BFBFBF;
    border-right: 0.2px solid #BFBFBF;

`;
export const BagItemPrice = styled.p`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    color: rgba(0, 0, 0, 1);
`;

export const CloseBag = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    border-radius: 20px;

    margin-right: -8px;
    margin-top: -88px;

    background-color: black;
    
    cursor: pointer;
`;
