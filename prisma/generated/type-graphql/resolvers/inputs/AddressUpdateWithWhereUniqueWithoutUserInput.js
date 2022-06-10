"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateWithoutUserInput_1 = require("../inputs/AddressUpdateWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateWithWhereUniqueWithoutUserInput = class AddressUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateWithoutUserInput_1.AddressUpdateWithoutUserInput)
], AddressUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
AddressUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], AddressUpdateWithWhereUniqueWithoutUserInput);
exports.AddressUpdateWithWhereUniqueWithoutUserInput = AddressUpdateWithWhereUniqueWithoutUserInput;
