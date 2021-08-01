import { motion } from "framer-motion";

function JVM() {
    return (
        <motion.div style={{
            padding: '1em',
            width: '100%',
            height: '100%',
        }}
            animate={{
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}>
            <img src="images/gdl/GD5.png"></img>
            <div style={{
                textAlign: 'left',
                verticalAlign: 'bottom',
                bottom: '30px',
                margin: '10px',
                background: 'rgba(0, 0, 0, 0.5)',
            }} className="shadow">
                -client -XX:+UseConcMarkSweepGC -XX:+CMSIncrementalMode -XX:SurvivorRatio=4 -XX:TargetSurvivorRatio=80 -XX:NewRatio=3 -Xss64M -XX:ParallelGCThreads=2 -XX:ConcGCThreads=2 <br />
                -XX:ReservedCodeCacheSize=128M -XX:CompressedClassSpaceSize=128M -XX:MinHeapFreeRatio=20 -XX:MaxHeapFreeRatio=70 -XX:CICompilerCount=4 -XX:InlineSmallCode=8K -XX:MaxInlineSize=128 <br />
                -XX:MaxTrivialSize=32 -XX:InitialTenuringThreshold=10 -XX:MaxTenuringThreshold=15 -XX:CompileThreshold=500 -XX:CMSInitiatingOccupancyFraction=80 -XX:+UseCMSInitiatingOccupancyOnly <br />
                -XX:+CMSScavengeBeforeRemark -XX:+ParallelRefProcEnabled -XX:+AggressiveOpts -XX:+OptimizeStringConcat -XX:+UseFastAccessorMethods -XX:+CMSScavengeBeforeRemark -XX:+CMSClassUnloadingEnabled <br />
                -XX:+DisableExplicitGC -XX:-UseGCOverheadLimit -XX:+UseCompressedOops -XX:+UseCodeCacheFlushing -XX:MaxGCPauseMillis=10 -XX:UseSSE=4 -XX:UseAVX=2 -Duser.language=en <br />
                -Duser.country=US -Djline.terminal=jline.UnsupportedTerminal
            </div>
        </motion.div>
    );
}

export default JVM;