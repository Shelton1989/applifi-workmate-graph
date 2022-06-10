"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorWhereUniqueInput_1 = require("../../../inputs/ColorWhereUniqueInput");
let DeleteColorArgs = class DeleteColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorWhereUniqueInput_1.ColorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorWhereUniqueInput_1.ColorWhereUniqueInput)
], DeleteColorArgs.prototype, "where", void 0);
DeleteColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteColorArgs);
exports.DeleteColorArgs = DeleteColorArgs;
