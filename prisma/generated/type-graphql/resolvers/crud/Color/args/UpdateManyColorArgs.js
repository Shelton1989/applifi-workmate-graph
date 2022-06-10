"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorUpdateManyMutationInput_1 = require("../../../inputs/ColorUpdateManyMutationInput");
const ColorWhereInput_1 = require("../../../inputs/ColorWhereInput");
let UpdateManyColorArgs = class UpdateManyColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateManyMutationInput_1.ColorUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorUpdateManyMutationInput_1.ColorUpdateManyMutationInput)
], UpdateManyColorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereInput_1.ColorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorWhereInput_1.ColorWhereInput)
], UpdateManyColorArgs.prototype, "where", void 0);
UpdateManyColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyColorArgs);
exports.UpdateManyColorArgs = UpdateManyColorArgs;
