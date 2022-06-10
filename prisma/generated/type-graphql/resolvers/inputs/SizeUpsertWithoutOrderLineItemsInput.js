"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCreateWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateWithoutOrderLineItemsInput");
const SizeUpdateWithoutOrderLineItemsInput_1 = require("../inputs/SizeUpdateWithoutOrderLineItemsInput");
let SizeUpsertWithoutOrderLineItemsInput = class SizeUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateWithoutOrderLineItemsInput_1.SizeUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeUpdateWithoutOrderLineItemsInput_1.SizeUpdateWithoutOrderLineItemsInput)
], SizeUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateWithoutOrderLineItemsInput_1.SizeCreateWithoutOrderLineItemsInput)
], SizeUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
SizeUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], SizeUpsertWithoutOrderLineItemsInput);
exports.SizeUpsertWithoutOrderLineItemsInput = SizeUpsertWithoutOrderLineItemsInput;
