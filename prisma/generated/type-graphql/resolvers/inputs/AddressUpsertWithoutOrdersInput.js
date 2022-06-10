"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpsertWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateWithoutOrdersInput_1 = require("../inputs/AddressCreateWithoutOrdersInput");
const AddressUpdateWithoutOrdersInput_1 = require("../inputs/AddressUpdateWithoutOrdersInput");
let AddressUpsertWithoutOrdersInput = class AddressUpsertWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateWithoutOrdersInput_1.AddressUpdateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUpdateWithoutOrdersInput_1.AddressUpdateWithoutOrdersInput)
], AddressUpsertWithoutOrdersInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressCreateWithoutOrdersInput_1.AddressCreateWithoutOrdersInput)
], AddressUpsertWithoutOrdersInput.prototype, "create", void 0);
AddressUpsertWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressUpsertWithoutOrdersInput", {
        isAbstract: true
    })
], AddressUpsertWithoutOrdersInput);
exports.AddressUpsertWithoutOrdersInput = AddressUpsertWithoutOrdersInput;
