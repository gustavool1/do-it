import { SkeletonProps, Skeleton, Box } from "@chakra-ui/react";

interface CardSkeletonProps extends SkeletonProps{
    repeatCount:number;
}
export const CardSkeleton = ({ repeatCount = 1 ,...rest }:CardSkeletonProps) =>{
    
    const howMany = Array.from(Array(repeatCount).keys())
    
    return(
        <>
            {howMany.map((key)=>(
                <Skeleton key={ key }    {...rest} speed={1} mt="10" startColor="gray.100" endColor="gray.200">
                    <Box w="330px" h="190px" padding="7" />
                </Skeleton>
            ))}
        </>
    )
}