import {BaseViewModel} from "~/base/BaseViewModel";
import {action, makeObservable, observable} from "mobx";

export class HomeViewModel extends BaseViewModel {
    constructor() {
        super();
        makeObservable(this)
    }

    @observable
    counter: number = 0

    @action
    setCounter(value: number) {
        this.counter = value
    }
}