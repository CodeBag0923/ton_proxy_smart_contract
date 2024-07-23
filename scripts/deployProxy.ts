import { address, Address, toNano } from '@ton/core';
import { Proxy } from '../wrappers/Proxy';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const proxy = provider.open(Proxy.createFromConfig({owner: address("EQC4tYtumFgvZpAi6nKqIKbhZDf2S29EOI7T1SAVDeqtCZ4i")}, await compile('Proxy')));

    await proxy.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(proxy.address);

    // run methods on `proxy`
}
