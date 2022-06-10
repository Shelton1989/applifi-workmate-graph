"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateOneRequiredWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateOrConnectWithoutOrderLineItemsInput");
const ColorCreateWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateWithoutOrderLineItemsInput");
const ColorUpdateWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpdateWithoutOrderLineItemsInput");
const ColorUpsertWithoutOrderLineItemsInput_1 = require("../inputs/ColorUpsertWithoutOrderLineItemsInput");
const ColorWhereUniqueInput_1 = require("../inputs/ColorWhereUniqueInput");
let ColorUpdateOneRequiredWithoutOrderLineItemsInput = class ColorUpdateOneRequiredWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateWithoutOrderLineItemsInput_1.ColorCreateWithoutOrderLineItemsInput)
], ColorUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateOrConnectWithoutOrderLineItemsInput_1.ColorCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateOrConnectWithoutOrderLineItemsInput_1.ColorCreateOrConnectWithoutOrderLineItemsInput)
], ColorUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpsertWithoutOrderLineItemsInput_1.ColorUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpsertWithoutOrderLineItemsInput_1.ColorUpsertWithoutOrderLineItemsInput)
], ColorUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], ColorUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateWithoutOrderLineItemsInput_1.ColorUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateWithoutOrderLineItemsInput_1.ColorUpdateWithoutOrderLineItemsInput)
], ColorUpdateOneRequiredWithoutOrderLineItemsInput.prototype, "update", void 0);
ColorUpdateOneRequiredWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateOneRequiredWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ColorUpdateOneRequiredWithoutOrderLineItemsInput);
exports.ColorUpdateOneRequiredWithoutOrderLineItemsInput = ColorUpdateOneRequiredWithoutOrderLineItemsInput;
