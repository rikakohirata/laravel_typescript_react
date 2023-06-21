
import { commonColor } from '@/styles/common';
import { generallyButton } from '@/types/generallyButton';
import { Button } from '@mui/material'; 

export const GenerallyButton = (props: generallyButton) => {
    const {buttonText} =props;
    return (
        
        <Button variant="contained" sx={commonColor}>
            {buttonText}
        </Button>
    );
};

