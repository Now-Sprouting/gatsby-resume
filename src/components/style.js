import styled from 'styled-components'

export const MainWrapper = styled.div`
    .ant-spin-nested-loading > div > .ant-spin{
        opacity: 1;
        top: -5rem;
    }
    .ant-spin-dot-item {
        opacity: 1.0;
    }
    .anticon svg {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .ant-spin-nested-loading {
        /* max-width: 960px; */
        overflow: hidden;
        opacity: 1;
    }
    .ant-spin-blur::after {
        /* max-width: 960px; */
        overflow: hidden;
        opacity: 1;
        background-color: #000000;
    }
    .ant-spin-blur {
        /* max-width: 960px; */
        overflow: hidden;
        opacity: 0.9;
    }
    .ant-spin-nested-loading > div > .ant-spin .ant-spin-text {
        top: 100%;
        color: #fff;
        font-size: 1rem;
    }
`