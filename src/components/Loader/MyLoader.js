import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className={'matreshka-block'}
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="260" height="260" />
        <rect x="0" y="276" rx="0" ry="0" width="258" height="23" />
        <rect x="3" y="311" rx="6" ry="6" width="257" height="64" />
        <rect x="0" y="391" rx="0" ry="0" width="90" height="27" />
        <rect x="121" y="387" rx="21" ry="21" width="139" height="41" />
    </ContentLoader>
)

export default MyLoader

