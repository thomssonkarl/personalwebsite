function Circle() {
    return ( 
        <svg width="25" height="25" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" fill="none" r="10" stroke="#202020" strokeWidth="2">
                <animate attributeName="r" from="8" to="20" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
            </circle>
            <circle cx="20" cy="20" fill="#202020" r="10" />
        </svg>
    )
}

export default Circle;