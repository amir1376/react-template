import {observer} from "mobx-react-lite";
import {useViewModel} from "../../Base/BaseViewModel";
import {HomeViewModel} from "./HomeViewModel";
import {Helmet} from "react-helmet"
function LibraryLink(props: { name: string, href: string }) {
    return <a className="text-blue-500" href={props.href}>
        {props.name}
    </a>
}
export const Home = observer(() => {
    const vm = useViewModel(() => new HomeViewModel())

    return <div className="min-h-screen container gap-4 flex flex-col justify-center items-center">
        <Helmet>
            <meta charSet="utf-8"/>
            <title>React App Template</title>
        </Helmet>

        <div className="md:w-1/2 card shadow-lg bg-base-300">
            <div className="card-body">
                <div className="card-title">
                    Introduction
                </div>
                <p>
                    this is a template for reactjs app that using
                    <div className="inline space-x-4 mx-4">
                        <LibraryLink name="vite" href="https://vitejs.dev/"/>
                        <LibraryLink name="typescript" href="https://www.typescriptlang.org/"/>
                        <LibraryLink name="react-router" href="https://reactrouter.com"/>
                        <LibraryLink name="tailwindcss" href="https://tailwindcss.com/"/>
                        <LibraryLink name="daysiui" href="https://daisyui.com/"/>
                        <LibraryLink name="mobx" href="https://mobx.js.org/"/>
                    </div>
                    with <strong>MVVM</strong> architecture
                </p>
                <div className="card-actions justify-end">
                    <a className="btn btn-primary" href="https://github.com/amir1376/react-template">
                        View In Github
                    </a>
                </div>
            </div>
        </div>
        <div className="card shadow-lg bg-base-200">
            <div className="card-body">
                <div className="card-title">
                    Counter sample
                </div>
                <p>
                    Press the Button to increment counter
                </p>
                <div className="card-actions justify-center">
                    <button className="btn normal-case"
                            onClick={() => vm.setCounter(vm.counter + 1)}>
                        you hit me <strong className="mx-2">{vm.counter}</strong> times
                    </button>
                </div>
            </div>
        </div>
    </div>
})