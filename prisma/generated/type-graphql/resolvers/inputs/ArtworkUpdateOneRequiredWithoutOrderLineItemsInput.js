"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateOrConnectWithoutOrderLineItemsInput");
const ArtworkCreateWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateWithoutOrderLineItemsInput");
const ArtworkUpdateWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpdateWithoutOrderLineItemsInput");
const ArtworkUpsertWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkUpsertWithoutOrderLineItemsInput");
const ArtworkWhereUniqueInput_1 = require("../inputs/ArtworkWhereUniqueInput");
let ArtworkUpdateOneRequiredWithoutOrderLineItemsInput = class ArtworkUpdateOneRequiredWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateWithoutOrderLineItemsInput_1.ArtworkCreateWithoutOrderLineItemsInput)
], ArtworkUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateOrConnectWithoutOrderLineItemsInput_1.ArtworkCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateOrConnectWithoutOrderLineItemsInput_1.ArtworkCreateOrConnectWithoutOrderLineItemsInput)
], ArtworkUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpsertWithoutOrderLineItemsInput_1.ArtworkUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpsertWithoutOrderLineItemsInput_1.ArtworkUpsertWithoutOrderLineItemsInput)
], ArtworkUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], ArtworkUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateWithoutOrderLineItemsInput_1.ArtworkUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateWithoutOrderLineItemsInput_1.ArtworkUpdateWithoutOrderLineItemsInput)
], ArtworkUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "update", void 0);
ArtworkUpdateOneRequiredWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateOneRequiredWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ArtworkUpdateOneRequiredWithoutOrderLineItemsInput);
exports.ArtworkUpdateOneRequiredWithoutOrderLineItemsInput = ArtworkUpdateOneRequiredWithoutOrderLineItemsInput;
