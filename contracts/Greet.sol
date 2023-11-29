// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Greet {
    string public str = "Hi";

    function setStr(string memory _newStr) public {
        str = _newStr;
    }
}
