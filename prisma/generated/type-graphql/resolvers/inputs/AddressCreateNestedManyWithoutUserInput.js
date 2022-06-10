"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateManyUserInputEnvelope_1 = require("../inputs/AddressCreateManyUserInputEnvelope");
const AddressCreateOrConnectWithoutUserInput_1 = require("../inputs/AddressCreateOrConnectWithoutUserInput");
const AddressCreateWithoutUserInput_1 = require("../inputs/AddressCreateWithoutUserInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateNestedManyWithoutUserInput = class AddressCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressCreateWithoutUserInput_1.AddressCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressCreateOrConnectWithoutUserInput_1.AddressCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateManyUserInputEnvelope_1.AddressCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateManyUserInputEnvelope_1.AddressCreateManyUserInputEnvelope)
], AddressCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AddressWhereUniqueInput_1.AddressWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AddressCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
AddressCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], AddressCreateNestedManyWithoutUserInput);
exports.AddressCreateNestedManyWithoutUserInput = AddressCreateNestedManyWithoutUserInput;
