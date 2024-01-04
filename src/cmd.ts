import { CmdRest } from './delivery/rest/cmd/cmd'

class Cmd {
    private CMD_REST = 'rest'

    main(){
        this.initDev()
    }
    
    //NÃO FICOU CLARO.
    initDev(): void {
        process.env['DATABASE_APP_POSTGRESQL_URI'] = ''
        new CmdRest().server()
    }
}

export {
    Cmd
}