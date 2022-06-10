"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpsertWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateWithoutOrderLineItemsInput");
const ArtworkUpdateWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateWithoutOrderLineItemsInput");
let ArtworkUpsertWithoutOrderLineItemsInput = class ArtworkUpsertWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateWithoutOrderLineItemsInput_1.ArtworkUpdateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateWithoutOrderLineItemsInput_1.ArtworkUpdateWithoutOrderLineItemsInput)
], ArtworkUpsertWithoutOrderLineItemsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput)
], ArtworkUpsertWithoutOrderLineItemsInput.prototype, "create", void 0);
ArtworkUpsertWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpsertWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ArtworkUpsertWithoutOrderLineItemsInput);
exports.ArtworkUpsertWithoutOrderLineItemsInput = ArtworkUpsertWithoutOrderLineItemsInput;
