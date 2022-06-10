"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCreateOrConnectWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateWithoutOrderLineItemsInput");
const SizeWhereUniqueInput_1 = require("../inputs/SizeWhereUniqueInput");
let SizeCreateOrConnectWithoutOrderLineItemsInput = class SizeCreateOrConnectWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeWhereUniqueInput_1.SizeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeWhereUniqueInput_1.SizeWhereUniqueInput)
], SizeCreateOrConnectWithoutOrderLineItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput)
], SizeCreateOrConnectWithoutOrderLineItemsInput.prototype, "create", void 0);
SizeCreateOrConnectWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeCreateOrConnectWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], SizeCreateOrConnectWithoutOrderLineItemsInput);
exports.SizeCreateOrConnectWithoutOrderLineItemsInput = SizeCreateOrConnectWithoutOrderLineItemsInput;
