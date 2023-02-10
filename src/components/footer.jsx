import React from 'react'

const Footer = () => {
    return (
        <footer class="w-full shadow md:flex md:items-center md:justify-between md:p-6">
            <span class="text-sm">© 2023 Task Manager
            </span>
            <ul class="flex flex-wrap items-center text-sm">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="https://github.com/quantosh" class="mr-4 hover:underline md:mr-6">Github</a>
                </li>
                <li>
                    <a href="mailto:ismaeldawsemi@gmail.com" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer