import { CmdRest } from './delivery/rest/cmd/cmd'

class Cmd {
    private CMD_REST = 'rest'

    main(){
        this.initDev()
    }
    
    initDev(): void {
        process.env['DATABASE_APP_POSTGRESQL_URI'] = 'a definir'
        new CmdRest().server()
    }
    }

export {
    Cmd
}