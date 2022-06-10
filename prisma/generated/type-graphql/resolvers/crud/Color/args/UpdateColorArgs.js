"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorUpdateInput_1 = require("../../../inputs/ColorUpdateInput");
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
let UpdateColorArgs = class UpdateColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateInput_1.ColorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateInput_1.ColorUpdateInput)
], UpdateColorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], UpdateColorArgs.prototype, "where", void 0);
UpdateColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateColorArgs);
exports.UpdateColorArgs = UpdateColorArgs;
