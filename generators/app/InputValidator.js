const projNameRegExp = /^[a-zA-Z_]+[a-zA-Z0-9_\-.]*$/;
const INAVLID_NAME_ERR_MSG="The name must start with a letter and may contain letters, digits, dashes, and underscores."
const EMPTY_NAME_ERR_MSG="You must provide a vaid name in order to continue."

module.exports= class InputValidator{
    static validateProjectName(projName){
        
        //if project name is empty
        if(!projName) return EMPTY_NAME_ERR_MSG;
        if(!projNameRegExp.test(projName)){
            //Project name is invalid
            return INAVLID_NAME_ERR_MSG;

        }
        return true;
    }

    static validateFunctionName(funcName){
        
        //if  name is empty
        if(!funcName) return EMPTY_NAME_ERR_MSG;
        if(!projNameRegExp.test(funcName)){
            // name is invalid
            return INAVLID_NAME_ERR_MSG;

        }
        return true;
    }

    static validateTriggerName(triggerName){
        
        //if name is empty
        if(!triggerName) return EMPTY_NAME_ERR_MSG;
        if(!projNameRegExp.test(triggerName)){
            // name is invalid
            return INAVLID_NAME_ERR_MSG;

        }
        return true;
    }
}