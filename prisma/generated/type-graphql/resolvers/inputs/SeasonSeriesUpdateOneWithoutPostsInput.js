"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutPostsInput");
const SeasonSeriesCreateWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateWithoutPostsInput");
const SeasonSeriesUpdateWithoutPostsInput_1 = require("../inputs/SeasonSeriesUpdateWithoutPostsInput");
const SeasonSeriesUpsertWithoutPostsInput_1 = require("../inputs/SeasonSeriesUpsertWithoutPostsInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesUpdateOneWithoutPostsInput = class SeasonSeriesUpdateOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutPostsInput_1.SeasonSeriesCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutPostsInput_1.SeasonSeriesCreateOrConnectWithoutPostsInput)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpsertWithoutPostsInput_1.SeasonSeriesUpsertWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpsertWithoutPostsInput_1.SeasonSeriesUpsertWithoutPostsInput)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutPostsInput_1.SeasonSeriesUpdateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutPostsInput_1.SeasonSeriesUpdateWithoutPostsInput)
], SeasonSeriesUpdateOneWithoutPostsInput.prototype, "update", void 0);
SeasonSeriesUpdateOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateOneWithoutPostsInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateOneWithoutPostsInput);
exports.SeasonSeriesUpdateOneWithoutPostsInput = SeasonSeriesUpdateOneWithoutPostsInput;
