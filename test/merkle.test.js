import test from"node:test";import assert from"node:assert/strict";import{buildMerkle,createProof,verifyProof}from"../public/merkle.js";
test("builds a root and verifies each leaf proof",async()=>{const tree=await buildMerkle(["a","b","c"]);assert.equal(tree.levels.at(-1).length,1);for(let i=0;i<3;i++)assert.equal(await verifyProof(tree.leaves[i],createProof(tree,i),tree.root),true);});
test("rejects empty input and invalid proof indexes",async()=>{await assert.rejects(()=>buildMerkle([]),/at least one/);const tree=await buildMerkle(["only"]);assert.throws(()=>createProof(tree,2),/out of range/);});
test("fails verification for a changed value",async()=>{const tree=await buildMerkle(["a","b"]);assert.equal(await verifyProof("tampered",createProof(tree,0),tree.root),false);});
