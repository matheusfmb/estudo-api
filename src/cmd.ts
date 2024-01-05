import { CmdRest } from './delivery/rest/cmd/cmd'

class Cmd {

    main(){
        this.initDev()
    }
    
    initDev(): void {
        new CmdRest().server()
    }
}

export {
    Cmd
}